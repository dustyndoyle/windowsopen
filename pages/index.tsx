import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import zipcodes from '../data/zip-codes.json';
import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';

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
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Should I Open My Windows?</title>
        <meta name="description" content="Should I open my windows today?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading mb="10" as="h1" size="2xl">
          Should I Open My Windows?
        </Heading>
        {!forcastTemp ?
          <form onSubmit={(e) => formSubmit(e)}>
            <Flex>
              <FormControl>
                <FormLabel>Zipcode</FormLabel>
                <NumberInput maxW={40} onChange={(val) => setzipcode(Number(val))}>
                  <NumberInputField />
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex mt="8" gap="8">
              <FormControl>
                <FormLabel>Lowest Temperature</FormLabel>
                  <NumberInput onChange={(val) => setLowestTemp(Number(val))} max={highestTemp ?? undefined}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Highest Temperature</FormLabel>
                  <NumberInput onChange={(val) => setHighestTemp(Number(val))} min={lowestTemp ?? undefined} defaultValue={lowestTemp ?? undefined}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex mt="8">
              <Button colorScheme="pink" type="submit" isLoading={isLoading} loadingText="Submitting">Submit</Button>
            </Flex>
            { error && 
              <Alert mt="4" status="error">
                Invalid fields
              </Alert>
            }
          </form>
        :
          <Flex direction="column" align="center" gap="6">
            <Box>
              {forcastTemp < lowestTemp || forcastTemp > highestTemp ?
                <Alert status="warning">
                  <Heading as="h2" size="lg">Not Today</Heading>
                </Alert>
              :
                <Alert status="success">
                  <Heading as="h2" size="lg">Open Your Windows</Heading>
                </Alert>
              }
            </Box>
            <Box>
              <Button colorScheme="gray" onClick={formReset}>Reset</Button>
            </Box>
          </Flex>
        }
      </main>
    </div>
  )
}

export default Home
