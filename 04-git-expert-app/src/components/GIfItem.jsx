import PropTypes from 'prop-types'

export const Gifitem = ({ title, url , id }) => {
    
    // console.log({ title, url , id })

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
    )
}

// LOS PROPTYPES
Gifitem.propTypes = {
  title: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
}

// Gifitem.defaultProps = {
//   title:'No hay Subtitulo',
//   url:'no existe url',
// }

/* Tarea 

  1.Añadir PropTypes 
    a.title obligatorio
    b. url obligatorio
  
  2.Evaluar snapshot.
*/
