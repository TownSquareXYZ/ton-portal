"use client";

// 卡片组件库

// 基础卡片组件
interface BaseCardProps {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export function BaseCard({ icon, title, description, onClick, className = '' }: BaseCardProps) {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <span className="text-primary text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// 特色资源卡片组件
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  buttonText: string;
  buttonColor: 'blue' | 'green' | 'purple';
  onButtonClick?: () => void;
  id?: string;
}

export function FeatureCard({ icon, title, description, tags, buttonText, buttonColor, onButtonClick, id }: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
  };

  const gradientClasses = {
    blue: 'from-blue-500 to-purple-600',
    green: 'from-green-500 to-emerald-600',
    purple: 'from-purple-500 to-pink-600'
  };

  return (
    <div id={id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-start space-x-4">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradientClasses[buttonColor]} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <button 
            className={`${colorClasses[buttonColor]} text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

// 学习路径卡片组件
interface LearningPathCardProps {
  icon: string;
  title: string;
  items: string[];
  buttonText: string;
  buttonColor: 'green' | 'blue' | 'purple';
  onButtonClick?: () => void;
}

export function LearningPathCard({ icon, title, items, buttonText, buttonColor, onButtonClick }: LearningPathCardProps) {
  const colorClasses = {
    green: 'bg-green-600 hover:bg-green-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
  };

  const iconColorClasses = {
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="text-center mb-4">
        <div className={`w-12 h-12 ${iconColorClasses[buttonColor]} rounded-full flex items-center justify-center mx-auto mb-3`}>
          <span className="text-xl">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      <button 
        className={`w-full mt-4 ${colorClasses[buttonColor]} text-white py-2 rounded-lg font-medium transition-colors cursor-pointer`}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

// 社区链接卡片组件
interface CommunityCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

export function CommunityCard({ icon, title, description, href, onClick }: CommunityCardProps) {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      href={href}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center cursor-pointer"
      onClick={onClick}
      target="_blank"
    >
      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
        <span className="text-primary text-lg">{icon}</span>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{title}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
    </Component>
  );
} 