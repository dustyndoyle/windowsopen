import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import zipcodes from '../data/zip-codes.json';

const Home: NextPage = () => {
  const [lowestTemp, setLowestTemp] = useState<number | null>(null);
  const [highestTemp, setHighestTemp] = useState<number | null>(null);
  const [zipcode, setzipcode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forcast, setForcast] = useState({});
  const [error, setError] = useState(false);

  const forcastTemp = Object.keys(forcast).length > 0 ? Math.round(forcast.temp.max) : null;
  
  const formSubmit = (e) => {
    e.preventDefault();
    
    if( validateForm() ) {
      setError(false);
      setIsLoading(true);
    }
  }

  const validateForm = () => {
    const zipData = getLatLng();
    if( zipData && lowestTemp && highestTemp) {
      return true;
    }
    setError(true);
    return false;
  }

  const formReset = () => {
    setLowestTemp(null);
    setHighestTemp(null);
    setzipcode(null);
    setIsLoading(false);
    setForcast({});
  }

  const fetchForcast = async (zipData: { ZIP: number, LAT: number, LNG: number }) => {
    const getForcast = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${zipData.LAT}&lon=${zipData.LNG}&exclude=current,minutely,hourly,alerts&units=imperial&appid=a2f85fc503b97eb3a803c2eda45085da`);
    const forcastJson = await getForcast.json();
    setForcast(forcastJson.daily[0]);
  }

  const getLatLng = () => {
    return zipcodes.find( (obj) => obj.ZIP === zipcode );
  }

  useEffect( () => {
    if( isLoading ) {
      const zipData = getLatLng();
      if( zipData ) {
        fetchForcast(zipData).then( () => setIsLoading(false)).catch( e => console.error(e));
      }
    }
  }, [isLoading])

  console.log(zipcode)
  console.log(forcast)
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
        {!forcastTemp ?
          <form onSubmit={(e) => formSubmit(e)}>
            <div className='form-row'>
              <label>Zipcode<input type="number" onChange={(e) => setzipcode(Number(e.target.value))} /></label>
            </div>
            <div className="form-row">
              <label>Lowest Temperature<input onChange={(e) => setLowestTemp(Number(e.target.value))} max={highestTemp ?? undefined} type="number" /></label>
              <label>Highest Temperature<input onChange={(e) => setHighestTemp(Number(e.target.value))} min={lowestTemp ?? undefined} type="number" /></label>
            </div>
            <div className="form-row">
              <button type="submit" disabled={isLoading ? true : false}>Submit</button>
            </div>
            { error && 
              <div className="form-row form-error">
                Form Error
              </div>
            }
          </form>
        :
          <div className="results">
            {forcastTemp < lowestTemp || forcastTemp > highestTemp ?
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
