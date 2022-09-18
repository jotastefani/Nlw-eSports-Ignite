import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import { CreateAdBanner } from './components/CreatAdBanner';
import { GameBanner } from './components/GameBanner';


import './styles/main.css';
import logoImg from './assets/logoNlweSports.svg';
import { CreatAdModal } from './components/CreateAdModal';
import axios from 'axios';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://192.168.15.34:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="logo escrito 'eSport nlw'" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root >
        <CreateAdBanner />

        <CreatAdModal />

      </Dialog.Root>

    </div>
  )
}

export default App