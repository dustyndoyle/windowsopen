import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [lowestTemp, setLowestTemp] = useState(0);
  const [highestTemp, setHighestTemp] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [forcast, setForcast] = useState({});
  
  const formSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  }

  const formReset = () => {
    setLowestTemp(0);
    setHighestTemp(0);
    setIsLoading(false);
    setForcast({});
  }

  const fetchForcast = async () => {
    const getForcast = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=40.039398&lon=-76.307083&exclude=current,minutely,hourly,alerts&units=imperial&appid=a2f85fc503b97eb3a803c2eda45085da`);
    const forcastJson = await getForcast.json();
    setForcast(forcastJson.daily[0]);
  }

  useEffect( () => {
    if( isLoading ) {
      fetchForcast().then( () => setIsLoading(false)).catch( e => console.error(e));
    }
  }, [isLoading])

  console.log(forcast)
  console.log(isLoading)
  return (
    <div className={styles.container}>
      <Head>
        <title>Should I Open My Windows?</title>
        <meta name="description" content="Should I open my windows today?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Should I Open My Windows?
        </h1>
        {Object.keys(forcast).length === 0 ?
          <form onSubmit={(e) => formSubmit(e)}>
            <div className="form-row">
              <label>Lowest Temperature<input onChange={(e) => setLowestTemp(Number(e.target.value))} type="number" /></label>
              <label>Highest Temperature<input onChange={(e) => setHighestTemp(Number(e.target.value))} type="number" /></label>
            </div>
            <div className="form-row">
              <button type="submit" disabled={isLoading ? true : false}>Submit</button>
            </div>
          </form>
        :
          <div className="results">
            {forcast.temp.max < lowestTemp || forcast.temp.max > highestTemp ?
              <div className="result result-no">No</div>
            :
              <div className="result result-yes">Yes</div>
            }
            <div className="results-reset">
              <button onClick={formReset} type="button">Reset</button>
            </div>
          </div>
        }
      </main>
    </div>
  )
}

export default Home
