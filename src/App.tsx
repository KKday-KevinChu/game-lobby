import { useState } from 'react'

const GAMES = [
  {
    id: 'buzz-voice',
    title: '猜歌大賽',
    description: '播放音樂片段，搶答歌名！支援文字輸入和選擇題雙模式。',
    howToPlay: [
      '建立派對，分享連結給朋友',
      '每個人手機自動播放音樂',
      '答越快分數越高！',
    ],
    emoji: '🎵',
    color: 'from-amber-500 to-orange-600',
    hoverColor: 'hover:from-amber-400 hover:to-orange-500',
    partyUrl: '/party',
    playerUrl: '/player',
    hostUrl: '/',
    url: 'https://buzz-voice-poc.onrender.com',
  },
  {
    id: 'draw-and-guess',
    title: '你畫我猜',
    description: '一人畫圖、其他人猜答案！支援輪流畫和固定畫家兩種模式。',
    howToPlay: [
      '建立派對，選擇畫家模式',
      '畫家在手機上畫，其他人看即時畫面猜答案',
      '猜對搶分，全自動推進！',
    ],
    emoji: '🎨',
    color: 'from-sky-500 to-indigo-600',
    hoverColor: 'hover:from-sky-400 hover:to-indigo-500',
    partyUrl: '/party',
    playerUrl: '/play',
    hostUrl: '/admin',
    url: 'https://draw-and-guess-spring-party.onrender.com',
  },
]

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="text-center pt-12 pb-8 px-4">
        <h1 className="text-4xl font-bold mb-2">🎮 遊戲大廳</h1>
        <p className="text-slate-400 text-lg">選擇一個遊戲開始玩吧！</p>
        <button
          onClick={handleCopyLink}
          className="mt-4 text-sm text-slate-400 hover:text-white transition-colors border border-slate-600 hover:border-slate-400 rounded-full px-4 py-1.5"
        >
          {copied ? '已複製連結！' : '📋 複製大廳連結分享給朋友'}
        </button>
      </div>

      {/* Game Cards */}
      <div className="max-w-5xl mx-auto px-4 pb-12 grid gap-6 md:grid-cols-2">
        {GAMES.map((game) => (
          <div
            key={game.id}
            className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all"
          >
            {/* Card Header */}
            <div className={`bg-gradient-to-r ${game.color} px-6 py-8 text-center`}>
              <span className="text-5xl block mb-3">{game.emoji}</span>
              <h2 className="text-2xl font-bold">{game.title}</h2>
              <p className="text-white/80 mt-2 text-sm">{game.description}</p>
            </div>

            {/* How to Play */}
            <div className="px-6 py-5">
              <h3 className="text-sm font-semibold text-slate-400 mb-3">玩法說明</h3>
              <ol className="space-y-2">
                {game.howToPlay.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 text-slate-400 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 flex gap-3">
              <a
                href={game.url + game.partyUrl}
                className={`flex-1 text-center py-3 rounded-xl bg-gradient-to-r ${game.color} ${game.hoverColor} font-bold text-lg transition-all active:scale-95`}
              >
                派對模式
              </a>
              <a
                href={game.url + game.hostUrl}
                className="px-4 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white font-medium transition-all text-sm flex items-center"
              >
                主持人
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pb-8 text-slate-500 text-sm">
        首次開啟遊戲需等待約 30 秒讓伺服器啟動
      </div>
    </div>
  )
}

export default App
