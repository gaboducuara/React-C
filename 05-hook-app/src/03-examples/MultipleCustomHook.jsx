import { useFetch, useCounter } from "../hooks";
import { LoadingQuote , Quote } from './index'

export const MultipleCustomHook = () => {

  const { counter , increment  } = useCounter( 6 );
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
      // si la data tiene un valor entonces toma la data en la posicion cero
    const { author , quote } = !!data && data[0];
// console.log({quote})
  return (
    <>
      <h1>Breaking bad Quoute</h1>
      <hr />

      {
        isLoading
        ? <LoadingQuote />
        : <Quote author={author} quote={quote}/>
      }
        <button 
            className="btn btn-primary"
            disabled={ isLoading }
            onClick={ () => increment() }>
            Next quote
        </button>
    </>
  );
};
