import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// Contactformulier → mail naar info@zentrack.nl via Brevo (30 aug 2026).
// Het oude formulier verstuurde NIETS maar toonde wel een succes-melding;
// deze route maakt het echt. Zonder geldige BREVO_API_KEY antwoorden we 503
// zodat de frontend een eerlijke mailto-uitwijk kan tonen (nooit nep-succes).

export async function POST(request: NextRequest) {
  let body: { firstName?: string; lastName?: string; email?: string; message?: string; context?: string; locaties?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  const firstName = (body.firstName || '').trim().slice(0, 100)
  const lastName = (body.lastName || '').trim().slice(0, 100)
  const email = (body.email || '').trim().slice(0, 200)
  const message = (body.message || '').trim().slice(0, 5000)
  // Optionele herkomst (bv. de /zorggroepen-pagina) — bepaalt het mailonderwerp
  // zodat een zorggroep-lead direct herkenbaar is in de inbox.
  const isZorggroep = (body.context || '').trim() === 'zorggroep'
  const locaties = (body.locaties || '').trim().slice(0, 50)

  if (!firstName || !email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: 'Vul naam en een geldig e-mailadres in' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'mail_unavailable' }, { status: 503 })
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'ZenTrack Contactformulier', email: 'noreply@zentrack.nl' },
        to: [{ email: 'info@zentrack.nl' }],
        replyTo: { email, name: `${firstName} ${lastName}`.trim() },
        subject: `${isZorggroep ? '[Zorggroep] ' : ''}Contactformulier: ${firstName} ${lastName}`.trim(),
        textContent:
          `Nieuw bericht via het contactformulier op zentrack.nl${isZorggroep ? ' (zorggroepen-pagina)' : ''}\n\n` +
          `Naam: ${firstName} ${lastName}\n` +
          `E-mail: ${email}\n` +
          (isZorggroep ? `Aantal locaties: ${locaties || '(niet ingevuld)'}\n` : '') +
          `\nBericht:\n${message || '(geen bericht ingevuld)'}`,
      }),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('[contact] Brevo weigerde:', res.status, detail.slice(0, 300))
      return NextResponse.json({ error: 'mail_unavailable' }, { status: 503 })
    }
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('[contact] verzending faalde:', e instanceof Error ? e.message : String(e))
    return NextResponse.json({ error: 'mail_unavailable' }, { status: 503 })
  }
}
