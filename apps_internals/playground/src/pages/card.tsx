import { CardFeatured } from '../components/card-orientation'
import { Text } from '../components/text'

const Page = () => {
  const video_data = [
    {
      title: "Editor's Choice",
      posts: [
        {
          super_title: 'Your day your way',
          title: 'Your checklist for better sleep',
          href: '/posts/sleep-app',
          image_url: 'https://heroui.com/images/card-example-5.jpeg',
          app_name: 'Sleep Well',
          app_icon: 'https://heroui.com/images/breathing-app-icon.jpeg',
          description: 'Improve your sleep quality',
          button_text: 'Download'
        },
        {
          super_title: 'Fitness',
          title: 'Morning workout routine',
          href: '/posts/fitness-app',
          image_url:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
          app_name: 'FitDaily',
          app_icon:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100',
          description: 'Start your day right',
          button_text: 'Try Free'
        },
        {
          super_title: 'Meditation',
          title: 'Mindfulness exercises',
          href: '/posts/meditation-app',
          image_url:
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500',
          app_name: 'MindSpace',
          app_icon:
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=100',
          description: 'Find inner peace',
          button_text: 'Get Started'
        },
        {
          super_title: 'Nutrition',
          title: 'Healthy meal plans',
          href: '/posts/nutrition-app',
          image_url:
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500',
          app_name: 'FoodTrack',
          app_icon:
            'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w-100',
          description: 'Track your meals',
          button_text: 'Learn More'
        }
      ]
    },
    {
      title: 'Top Trends of AI',
      posts: [
        {
          super_title: 'AI Assistant',
          title: 'Smart daily planning',
          href: '/posts/ai-assistant',
          image_url:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500',
          app_name: 'AI Planner',
          app_icon:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100',
          description: 'AI-powered scheduling',
          button_text: 'Explore'
        },
        {
          super_title: 'ML Models',
          title: 'Predictive analytics tools',
          href: '/posts/ml-tools',
          image_url:
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500',
          app_name: 'DataSense',
          app_icon:
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=100',
          description: 'Advanced predictions',
          button_text: 'Demo'
        },
        {
          super_title: 'Neural Networks',
          title: 'Image recognition system',
          href: '/posts/neural-networks',
          image_url:
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500',
          app_name: 'VisionAI',
          app_icon:
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100',
          description: 'Advanced image processing',
          button_text: 'View'
        },
        {
          super_title: 'ChatGPT',
          title: 'Conversational AI platform',
          href: '/posts/chatgpt-app',
          image_url:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500',
          app_name: 'ChatAI',
          app_icon:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100',
          description: 'Intelligent conversations',
          button_text: 'Chat Now'
        }
      ]
    }
  ]

  const handleButtonClick = (href: string) => {
    console.log('Button clicked for:', href)
    // You can add custom logic here
  }

  return (
    <div className="px-6">
      {video_data.map(({ title, posts }) => (
        <div key={title}>
          <div className="flex items-center gap-4 pb-4">
            <Text
              className="cursor-default"
              content={title}
              variant="title"
              vc="black"
              size="md"
            />
          </div>
          <CardFeatured
            posts={posts}
            orientation="vertical"
            responsiveness={true}
            onButtonClick={handleButtonClick}
          />
        </div>
      ))}
    </div>
  )
}

export { Page }
