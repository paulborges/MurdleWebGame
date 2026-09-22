
import Header from '../components/Header'
import GameModeCard from '../components/GameModeCard'


function Home() {

  return (
    <>
      <section className = "main-page">
        <Header/>
        <h2 className='game-selection-title'>Choose Your Game</h2>
        <div className='game-mode-cards'>
          <GameModeCard
            title = "PUZZLE MODE"
            description = "Solve a predefined Murdle Mystery"
            buttonText = "PLAY"
            path = "/puzzle"
            />
          <GameModeCard
            title = "MANUAL MODE"
            description = "Create your own deduction grid"
            buttonText = "START"
            path = "/manual"
            />
          </div>
      </section>
    </>
  )
}

export default Home
