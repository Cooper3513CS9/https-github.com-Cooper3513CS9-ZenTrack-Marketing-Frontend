import React from 'react';
import { BookOpen, Briefcase, Scale, ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  icon: React.ReactNode;
  readTime: string;
  color: string;
}

export const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'onderzoek',
      title: 'Onderzoek: Voorraadbeheer in Nederlandse Huisartsenpraktijken',
      excerpt: 'Een diepgaande analyse van hoe Nederlandse huisartsen hun medische voorraden beheren. Ontdek de grootste uitdagingen en best practices.',
      category: 'Onderzoek',
      date: '15 november 2024',
      author: 'Dr. M. van der Berg',
      icon: <BookOpen className="w-6 h-6" />,
      readTime: '8 min',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'wetgeving',
      title: 'GDPR & Medische Gegevens: Wat Moet Je Weten?',
      excerpt: 'Hoe zorg je ervoor dat je voorraadbeheer compliant is met GDPR en andere regelgeving? Een praktische gids voor huisartsen.',
      category: 'Wetgeving',
      date: '10 november 2024',
      author: 'Drs. J. Smit (Compliance Expert)',
      icon: <Scale className="w-6 h-6" />,
      readTime: '6 min',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'praktijkmanagement',
      title: 'Praktijkmanagement: 5 Tips voor Efficiëntere Voorraadbeheer',
      excerpt: 'Leer hoe je je voorraadbeheer kunt optimaliseren en kosten kunt besparen. Praktische tips van ervaren praktijkmanagers.',
      category: 'Praktijkmanagement',
      date: '5 november 2024',
      author: 'Mevr. A. Jansen (Praktijkmanager)',
      icon: <Briefcase className="w-6 h-6" />,
      readTime: '7 min',
      color: 'from-emerald-600 to-emerald-400'
    }
  ];

  return (
    <section id="insights" className="py-24 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-200 shadow-sm">
            <BookOpen className="w-4 h-4" />
            <span>Insights & Kennis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Leer van Experts in de Zorg
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ontdek onderzoeken, regelgeving en praktijktips van professionals in het veld.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* Category Badge & Icon */}
              <div className={`h-32 bg-gradient-to-br ${post.color} p-6 flex items-start justify-between text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {post.category}
                  </span>
                </div>
                <div className="relative z-10 text-white/80">
                  {post.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read Time & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {post.readTime} leestijd
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center gap-1 group/btn">
                    Lees meer
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Wil je op de hoogte blijven?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Ontvang maandelijks praktische tips, onderzoeken en inzichten rechtstreeks in je inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="email" 
              placeholder="je@email.nl"
              className="px-4 py-3 rounded-lg text-slate-900 font-medium placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none sm:min-w-[250px]"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg">
              Abonneer
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            We respecteren je privacy. Afmelden kan altijd.
          </p>
        </div>

      </div>
    </section>
  );
};
