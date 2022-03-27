import Link from 'next/link'  

function registerSuccess() {
  return (
    <div> 
      <h2>Registrierung  Abgeschlossen!</h2> 
      <h3>Sie werden innerhalb der nächsten 24 stunden als Admin frei geschaltet!</h3> 
      <h3>Sie werden nun zurück zur Startseite geleitet!</h3> 
      <h3>Sollten Sie noch Fragen haben, kontaktieren Sie uns bitte!</h3> 
      <h3>Vielen Dank!</h3>  
      <Link 
      <button>Zurück zu startseite</button>
    </div>
  )
}

export default registerSuccess