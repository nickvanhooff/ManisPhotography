interface PortfolioImage {
  src: string
  alt: string
  title: string
  category: string
}

export function usePortfolioImages() {
  const getImagesByCategory = (category: string): PortfolioImage[] => {
    switch (category) {
      case 'events':
        return [
          // Event photos
          {
            src: '/images/events/event/eventphoto(1).jpg',
            alt: 'Bedrijfsuitje - Team Building',
            title: 'Team Building',
            category: 'events'
          },
          {
            src: '/images/events/event/eventphoto(2).jpg',
            alt: 'Bedrijfsuitje - Networking Event',
            title: 'Networking Event',
            category: 'events'
          },
          {
            src: '/images/events/event/eventphoto(3).jpg',
            alt: 'Bedrijfsuitje - Corporate Celebration',
            title: 'Corporate Celebration',
            category: 'events'
          }
        ]
      
      case 'weddings':
        return [
          {
            src: '/images/wedding/ManisPhotography_bruiloft 1.avif',
            alt: 'Bruiloft foto 1',
            title: 'Bruidspaar',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 2.avif',
            alt: 'Bruiloft foto 2',
            title: 'Ceremonie',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 3.avif',
            alt: 'Bruiloft foto 3',
            title: 'Receptie',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 4.avif',
            alt: 'Bruiloft foto 4',
            title: 'Eerste dans',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 5.avif',
            alt: 'Bruiloft foto 5',
            title: 'Familie foto',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft.avif',
            alt: 'Bruiloft foto 6',
            title: 'Locatie',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 6.avif',
            alt: 'Bruiloft foto 7',
            title: 'Detail',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 7.avif',
            alt: 'Bruiloft foto 8',
            title: 'Moment',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 8.avif',
            alt: 'Bruiloft foto 9',
            title: 'Emotie',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 9.avif',
            alt: 'Bruiloft foto 10',
            title: 'Sfeer',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 10.avif',
            alt: 'Bruiloft foto 11',
            title: 'Herinnering',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 11.avif',
            alt: 'Bruiloft foto 12',
            title: 'Geluk',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 12.avif',
            alt: 'Bruiloft foto 13',
            title: 'Liefde',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 13.avif',
            alt: 'Bruiloft foto 14',
            title: 'Viering',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 14.avif',
            alt: 'Bruiloft foto 15',
            title: 'Feest',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 15.avif',
            alt: 'Bruiloft foto 16',
            title: 'Gasten',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 16.avif',
            alt: 'Bruiloft foto 17',
            title: 'Dansen',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 17.avif',
            alt: 'Bruiloft foto 18',
            title: 'Gelach',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 18.avif',
            alt: 'Bruiloft foto 19',
            title: 'Vriendschap',
            category: 'weddings'
          },
          {
            src: '/images/wedding/ManisPhotography_bruiloft 19.avif',
            alt: 'Bruiloft foto 20',
            title: 'Einde',
            category: 'weddings'
          }
        ]
      
      case 'festivals':
        return [
          // TheConflict Festival
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(1).avif',
            alt: 'TheConflict Festival - Live Performance',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(2).avif',
            alt: 'TheConflict Festival - Crowd Energy',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(3).avif',
            alt: 'TheConflict Festival - Stage Action',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(4).avif',
            alt: 'TheConflict Festival - Artist Close-up',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(5).avif',
            alt: 'TheConflict Festival - Lighting Effects',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(6).avif',
            alt: 'TheConflict Festival - Crowd Moment',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(7).avif',
            alt: 'TheConflict Festival - Performance',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(8).avif',
            alt: 'TheConflict Festival - Stage',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(9).avif',
            alt: 'TheConflict Festival - Energy',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(10).avif',
            alt: 'TheConflict Festival - Atmosphere',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(11).avif',
            alt: 'TheConflict Festival - Crowd',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(12).avif',
            alt: 'TheConflict Festival - Performance',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/TheConflict/TheconflictManïsPhotography(13).avif',
            alt: 'TheConflict Festival - Finale',
            title: 'TheConflict Festival',
            category: 'festivals'
          },
          // Aversion Festival
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography.avif',
            alt: 'Aversion Festival - Main Stage',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(1).avif',
            alt: 'Aversion Festival - Artist Performance',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(2).avif',
            alt: 'Aversion Festival - Stage Lighting',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(3).avif',
            alt: 'Aversion Festival - Crowd Moment',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(4).avif',
            alt: 'Aversion Festival - Performance',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(5).avif',
            alt: 'Aversion Festival - Energy',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(6).avif',
            alt: 'Aversion Festival - Atmosphere',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(7).avif',
            alt: 'Aversion Festival - Crowd',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(8).avif',
            alt: 'Aversion Festival - Stage',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(9).avif',
            alt: 'Aversion Festival - Performance',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(10).avif',
            alt: 'Aversion Festival - Lighting',
            title: 'Aversion Festival',
            category: 'festivals'
          },
          {
            src: '/images/events/Aversion/Aversion_ManïsPhotography(11).avif',
            alt: 'Aversion Festival - Finale',
            title: 'Aversion Festival',
            category: 'festivals'
          }
        ]
      
      default:
        return []
    }
  }

  return {
    getImagesByCategory
  }
}
