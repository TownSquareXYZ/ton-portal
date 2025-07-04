"use client";

import MoreDetailsCard from "@/components/MoreDetailsCard";
import { useRef, useState } from "react";

export function StatsCharts() {
  // TON Weekly 区域 iframe 加载 (4个iframe)
  const [weeklyLoading, setWeeklyLoading] = useState(true);
  const weeklyIframeCount = 4;
  const weeklyLoadedCount = useRef(0);
  const handleWeeklyIframeLoad = () => {
    weeklyLoadedCount.current += 1;
    if (weeklyLoadedCount.current >= weeklyIframeCount) {
      setWeeklyLoading(false);
    }
  };

  // TON Ecosystem 区域 iframe 加载 (5个iframe)
  const [ecosystemLoading, setEcosystemLoading] = useState(true);
  const ecosystemIframeCount = 5;
  const ecosystemLoadedCount = useRef(0);
  const handleEcosystemIframeLoad = () => {
    ecosystemLoadedCount.current += 1;
    if (ecosystemLoadedCount.current >= ecosystemIframeCount) {
      setEcosystemLoading(false);
    }
  };

  // Telegram Gifts 区域 iframe 加载 (3个iframe)
  const [giftsLoading, setGiftsLoading] = useState(true);
  const giftsIframeCount = 3;
  const giftsLoadedCount = useRef(0);
  const handleGiftsIframeLoad = () => {
    giftsLoadedCount.current += 1;
    if (giftsLoadedCount.current >= giftsIframeCount) {
      setGiftsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <MoreDetailsCard
        href="https://dune.com/queries/4297875/7296033"
        linkText="TON Weekly"
        loading={weeklyLoading}
      >
        <div className="titleTag bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block mb-4 shadow-md">
          TON Weekly
        </div>
        {/* weekly charts */}
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row gap-4">
            <div className="flex flex-col w-1/2">
              <iframe
                src="https://dune.com/embeds/4564764/7612752"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleWeeklyIframeLoad}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <iframe
                src="https://dune.com/embeds/4926840/8153739"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleWeeklyIframeLoad}
              />
            </div>
          </div>
          <div className="w-full flex flex-row gap-4">
            {/* weekly count */}
            <div className="flex flex-col w-1/2">
              <iframe
                src="https://dune.com/embeds/4959124/8206128"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleWeeklyIframeLoad}
              />
            </div>
            <div className="w-1/2 flex items-stretch">
              <iframe
                src="https://dune.com/embeds/4959106/8206098"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleWeeklyIframeLoad}
              />
            </div>
          </div>
        </div>
      </MoreDetailsCard>
      <MoreDetailsCard
        href="https://dune.com/telegram/ton"
        linkText="TON Ecosystem Analytics"
        loading={ecosystemLoading}
      >
        {/* ecosystem analytics */}
        <div className="w-full flex flex-col gap-4">
          <div className="titleTag bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block shadow-md w-fit">
            Mini Apps
          </div>
          <div className="w-full flex flex-row gap-4">
            {/* mini count */}
            <div className="flex flex-col w-1/2">
              <iframe
                src="https://dune.com/embeds/5383395/8807369"
                className="w-full h-[165px] rounded-lg shadow-md border-0 bg-white mb-[20px] p-2"
                allowFullScreen
                onLoad={handleEcosystemIframeLoad}
              />
              <iframe
                src="https://dune.com/embeds/5383395/8807375"
                className="w-full h-[165px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleEcosystemIframeLoad}
              />
            </div>
            <div className="w-1/2 flex items-stretch">
              <iframe
                src="https://dune.com/embeds/5246606/8621757"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleEcosystemIframeLoad}
              />
            </div>
          </div>
          <div className="titleTag bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block shadow-md w-fit">
            DEX
          </div>
          <div className="w-full flex flex-row gap-4">
            {/* dex count */}
            <div className="flex flex-col w-full">
              <iframe
                src="https://dune.com/embeds/5383913/8808145"
                className="w-full h-[165px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleEcosystemIframeLoad}
              />
            </div>
          </div>
          <div className="w-full flex flex-row gap-4">
            {/* dex charts */}
            <div className="flex flex-col w-1/2">
              <iframe
                src="https://dune.com/embeds/5246606/8621757"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white mb-[20px] p-2"
                allowFullScreen
                onLoad={handleEcosystemIframeLoad}
              />
            </div>
            <div className="w-1/2 flex items-stretch">
              <iframe
                src="https://dune.com/embeds/5383913/8808097"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleEcosystemIframeLoad}
              />
            </div>
          </div>
        </div>
      </MoreDetailsCard>
      <MoreDetailsCard
        href="https://dune.com/rdmcd/telegram-gifts"
        linkText="Telegram Gifts"
        loading={giftsLoading}
      >
        <div className="titleTag bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block mb-4 shadow-md">
          Gift Analytics
        </div>
        {/* gifts data */}
        <div className="w-full flex flex-row gap-4">
          <div className="w-full flex flex-row gap-4">
            <div className="flex flex-col w-1/2 gap-4">
              <iframe
                src="https://dune.com/embeds/5135806/8465224"
                className="w-full h-[165px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleGiftsIframeLoad}
              />
              <iframe
                src="https://dune.com/embeds/5135806/8465223"
                className="w-full h-[165px] rounded-lg shadow-md border-0 bg-white p-2"
                allowFullScreen
                onLoad={handleGiftsIframeLoad}
              />
            </div>
            <div className="w-1/2">
              <iframe
                src="https://dune.com/embeds/5133545/8462123"
                className="w-full h-[350px] rounded-lg shadow-md border-0 bg-white"
                allowFullScreen
                onLoad={handleGiftsIframeLoad}
              />
            </div>
          </div>
        </div>
      </MoreDetailsCard>
    </div>
  );
}
