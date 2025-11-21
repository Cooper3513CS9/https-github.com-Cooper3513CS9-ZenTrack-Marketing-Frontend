
import { ChatMessage, MessageStatus } from "../types";

// Types specific to MessageBird Conversations API
interface BirdMessagePayload {
  to: string;
  from: string; // Channel ID
  type: 'text' | 'image';
  content: {
    text?: string;
    image?: {
      url: string;
    }
  };
}

class MessageBirdService {
  private apiKey: string | null = null;
  private channelId: string = '035a8594-4934-4b24-833b-253110088d30'; // Mock Channel ID

  constructor() {
    // In a real app, we would initialize with a key, but we shouldn't store keys in frontend code.
    // this.apiKey = process.env.REACT_APP_BIRD_API_KEY;
  }

  /**
   * Simulates sending a message via MessageBird WhatsApp Channel
   */
  async sendMessage(
    to: string, 
    text: string, 
    isImage: boolean = false
  ): Promise<{ id: string; status: MessageStatus }> {
    
    const payload: BirdMessagePayload = {
      to: to,
      from: this.channelId,
      type: isImage ? 'image' : 'text',
      content: isImage 
        ? { image: { url: 'placeholder_url' } } 
        : { text: text }
    };

    console.log('[MessageBird] Sending payload:', payload);

    // SIMULATION:
    // Since we cannot make backend API calls from this frontend demo without CORS/Security issues,
    // we simulate the network delay and success response of the Bird API.
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: crypto.randomUUID(),
          status: 'sent'
        });
      }, 600);
    });
  }

  /**
   * Simulates receiving a status update webhook from WhatsApp (Sent -> Delivered -> Read)
   */
  simulateStatusUpdates(
    messageId: string, 
    onUpdate: (status: MessageStatus) => void
  ) {
    // WhatsApp flow: Sent (1 tick) -> Delivered (2 ticks) -> Read (Blue ticks)
    
    // 1. Delivered after 1.5s
    setTimeout(() => {
      onUpdate('delivered');
    }, 1500);

    // 2. Read after 3s
    setTimeout(() => {
      onUpdate('read');
    }, 3000);
  }
}

export const birdService = new MessageBirdService();
