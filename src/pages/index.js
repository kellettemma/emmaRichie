import * as React from "react"
import "./styles.css" 


const IndexPage = () => {
  return (
    <main>
      <div class="masthead">
        <div class="details">
          <h1><img src="./images/emma-richie.png" alt="Emma and Richard" /></h1>
          <p class="sub-heading">Together with Isabelle and their families</p>
          <p class="sub-heading">invite you to share in their wedding celebration</p>
          <p class="sub-heading">SUNDAY, the 30th of JUNE 2024 <br />at 2:30pm at Castle Leslie Glaslough, Co. Monaghan</p>
          <div class="letter-image fadeIn">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter"><img src="./images/wedding-invitation.jpg" /></div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
          </div>
          <a class="button fadeIn" href="#rsvp">RSVP</a>
        </div>
        <img src="./images/castle.png" alt="castle leslie" class="masthead-mobile" />
      </div>
      <div class="parallax__img"></div>
      <section>
        <div class="blue">
          <div class="flex fadeIn">
            <h2>Guest Information</h2>
            <h3>The Ceremony</h3>
            <p>The ceremony will take place at 2:30pm outdoors on Castle Grounds (weather permitting), otherwise, it will take place inside the castle. </p>
            <h3>Wedding reception</h3>
            <p>Join us in the castle after the ceremony for a drinks reception, dinner, cake and dancing!</p>
            <p>In order to allow all guests, including parents, an evening of relaxation we have chosen for our wedding day to be an adult-only occasion. We hope this advance notice means you are still able to share our big day and will enjoy having the evening off!</p>
            <h3> Accommodation</h3>
            <p>We have reserved rooms for the bridal party and immediate family. There are additional rooms for guests, please get in touch with us and we will be happy to reserve a room for you.</p>
            <p>Alternatively, you can contact the Estate directly to enquire about availability and rates or book directly on the website, <a href="https://www.castleleslie.com/" target="_blank">www.castleleslie.com</a></p><p>For more information on the local area please see <a href="https://www.castleleslie.com/attractions/walking/" target="_blank">castle leslie local area section</a>. For more information on walks around the castle please see <a href="https://www.castleleslie.com/attractions/walking/" target="_blank">castle leslie walking page</a></p>
            <h3> Social Media</h3>
            <p>We politely ask that our guests don't share photos of our wedding on social media- thank you for your understanding.</p>
            <h3> Location</h3>
            <p>Castle Leslie Estate, <br />Glaslough,<br />Co.Monaghan,<br />H18 FY04, Ireland.</p>
            <p> <strong><a href="https://www.castleleslie.com/contact/directions/" target="_blank">Driving directions to Castle Leslie Estate</a></strong>.<br /><strong>Sat Nav:</strong> Latitude 54.31821, Longitude -6.89582<br /><strong>Garmin Loc8 code:</strong> G6E-22-5TK</p>
          </div>
        </div></section>
      <div class="parallax__img parallax__img--2"></div>
      <footer>
        <div class="flex fadeIn">
          <h2 id="rsvp">Kindly reply by April 20<sup>th</sup></h2>
          <p>Kindly RSVP by filling out the form below. </p>
          <p> We are so excited to celebrate with you!</p>
          <form id="fs-frm" name="basic-rsvp-form" accept-charset="utf-8" action="https://formspree.io/f/xrgnlbrp" method="post">
            <fieldset id="fs-frm-inputs" class="flex-row">
              <div class="column">
                <label for="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" />
                <label for="attending">Will you Attend?</label>
                <select name="attending" id="attending">
                  <option value="">Select</option>
                  <option value="Yes">Gladly accepts</option>
                  <option value="No">Regretfully declines</option>
                </select>
                <label for="main">What main course?</label>
                <select name="main" id="main">
                  <option value="">Select</option>
                  <option value="beef">Traditional Beef Wellington, Roscoff Onion, Fondant Potato, Heritage Carrot &amp; Vegetable Parcel, Madeira Jus</option>
                  <option value="fish">Pan-Fried Hake, Heritage Carrot &amp; Vegetable Parcel, Creamed Potato, With wine Velouté</option>
                </select>
                <label for="diet">Do you have any special dietiary requirements?</label>
                <textarea name="diet" id="diet"></textarea>
                <label for="song">Any special song requests?</label>
                <textarea name="song" id="song"></textarea>
                <label for="message">Questions or Comments</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <div class="column">
                <label for="plus">Are you bringing a guest?</label
                ><select name="plus" id="plus">
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label for="guest-full-name">Guest Full Name</label>
                <input type="text" name="guest-full-name" id="guest-full-name" placeholder="First and Last" />
                <label for="guest-main">What main course?</label>
                <select name="guest-main" id="guest-main">
                  <option value="">Select</option>
                  <option value="beef">Traditional Beef Wellington, Roscoff Onion, Fondant Potato, Heritage Carrot &amp; Vegetable Parcel, Madeira Jus</option>
                  <option value="fish">Pan-Fried Hake, Heritage Carrot &amp; Vegetable Parcel, Creamed Potato, With wine Velouté</option>
                </select>
                <label for="guest-diet">Do they have any special dietiary requirements?</label>
                <textarea name="guest-diet" id="guest-diet"></textarea>
                <label for="accommodation">Would you like to reserve a room?</label>
                <select name="accommodation" id="accommodation"
                ><option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <input type="hidden" name="_subject" id="email-subject" value="RSVP" />
            </fieldset>
            <input type="submit" value="RSVP" />
          </form>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Emma & Richard </title>
