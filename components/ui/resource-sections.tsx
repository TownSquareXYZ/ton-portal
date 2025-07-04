"use client";

import { BaseCard, FeatureCard, LearningPathCard, CommunityCard } from "./resource-card";

// 数据类型定义
interface QuickAccessItem {
  icon: string;
  title: string;
  description: string;
  url?: string;
  scrollTo?: string;
  onClick?: () => void;
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  buttonText: string;
  buttonColor: 'blue' | 'green' | 'purple';
  url?: string;
  onButtonClick?: () => void;
  id?: string;
}

interface LearningPathItem {
  icon: string;
  title: string;
  items: string[];
  buttonText: string;
  buttonColor: 'green' | 'blue' | 'purple';
  url?: string;
  onButtonClick?: () => void;
}

interface CommunityItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

// 快速访问分类组件
interface QuickAccessSectionProps {
  items: QuickAccessItem[];
}

export function QuickAccessSection({ items }: QuickAccessSectionProps) {
  const handleClick = (item: QuickAccessItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {items.map((item, index) => (
        <BaseCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
}

// 特色资源组件
interface FeaturedResourcesSectionProps {
  items: FeatureItem[];
}

export function FeaturedResourcesSection({ items }: FeaturedResourcesSectionProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          tags={item.tags}
          buttonText={item.buttonText}
          buttonColor={item.buttonColor}
          onButtonClick={item.onButtonClick || (() => item.url && window.open(item.url, '_blank'))}
          id={item?.id}
        />
      ))}
    </div>
  );
}

// 学习路径组件
interface LearningPathsSectionProps {
  items: LearningPathItem[];
}

export function LearningPathsSection({ items }: LearningPathsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <LearningPathCard
          key={index}
          icon={item.icon}
          title={item.title}
          items={item.items}
          buttonText={item.buttonText}
          buttonColor={item.buttonColor}
          onButtonClick={item.onButtonClick || (() => item.url && window.open(item.url, '_blank'))}
        />
      ))}
    </div>
  );
}

// 社区链接组件
interface CommunityLinksSectionProps {
  items: CommunityItem[];
}

export function CommunityLinksSection({ items }: CommunityLinksSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <CommunityCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
} 