import * as React from "react"
import "./styles.css"

const IndexPage = () => {
  return (
    <main>
      <p className="sub-heading large">Save the Date!</p>
      <p className="sub-heading description">Together with Isabelle and our families, <br />
        we would love to celebrate our wedding day with you!</p>
      <div className="masthead">
        <img src="../../images/bg.png" alt="castle leslie" className="masthead-mobile desktop" />
        <div className="details">
          <h1>
            Emma &amp; Richard
          </h1>
          <p><em>will have their wedding</em></p>
          <p className="sub-heading">
            June  30th 2024
          </p>
          <p className="sub-heading">
            Castle Leslie Estate <br />
            Glaslough, Co. Monaghan
          </p>
          <p><em> A formal invitation will follow. </em></p>

        </div>

      </div>
      <hr />
      <h2> The Details</h2>
      <div className="flex">
        <div className="column center">
          <img src="./images/doves.png" alt="Doves" className="img" />
          <h3 className="h3-accent"> The Ceromony</h3>
          <h4>3pm</h4>
          <p>
            We hope weather permitting that the ceremony will take place outdoors on the castle grounds.
            If it rains the ceremony will take place in the castle.
          </p></div>
        <div className="column center">
          <img src="./images/drinks.png" alt="champagne glasses" className="img glasses"/>
          <h3 className="h3-accent"> The Reception</h3>
          <h4>4pm</h4>
          <p> Join us after the cermony for a drinks reception, dinner, cake and dancing!
          </p></div>
      </div>
      <div className="flex blue">
        <div className="column">
          <h3> Location</h3>
          <p>
            Castle Leslie Estate, <br />
            Glaslough,<br />
            Co.Monaghan,<br />
            H18 FY04, Ireland.
          </p>

          <p>  Castle Leslie Estate is just 80 minutes from Dublin. <br />
            <a href="https://www.castleleslie.com/contact/directions/" target="_blank">
              Driving directions from Dublin to Castle Leslie Estate. </a>
            .</p>
          <p> <strong>Sat Nav:</strong> Latitude 54.31821, Longitude -6.89582<br />
            <strong>Garmin Loc8 code:</strong> G6E-22-5TK</p>

        </div>
        <div className="column">  <h3> Accommodation</h3><p>
          We have reserved rooms for the bridal party and immediate family. there are additional rooms for guests, please get in touch with us and we will be happy to reserve a room for you.
        </p><p>
            Alternatively, you can contact the Estate directly to enquire about availability and rates or book directly on the website, <a href="https://www.castleleslie.com/" target="_blank">www.castleleslie.com</a>
          </p></div>
      </div>

      <footer>
       
        <div className="flex flex-end">
          <div className="column">
          <h3> Get in touch</h3>
        <p>Please get in touch if you have any questions:</p>

            <p> <strong>Emma</strong>  <br />
              Mobile: 0870910442 <br />
              Email: emma.kellett@gmail.com</p>

          </div>
          <div className="column">
            <p>
              <strong> Richard </strong><br />
              Mobile:  0876621137<br />
              Email: richiebehan@gmail.com</p>  </div>
        </div>
      </footer>

    </main >
  )
}

export default IndexPage

export const Head = () => <title>Emma & Richard &#x1F496; </title>
