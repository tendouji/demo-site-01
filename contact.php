<?php 
$page = "contact";
include('page-top.php'); 
?>

<style>
input, textarea {
  color: #000;
}
</style>

<div class="contact-page">
  <div class="wrapper">
    <?php include('header.php'); ?>
  </div>

  <div class="wrapper">
    <h2>Contact Us.</h2>
  </div>

  <div class="contact-segment">
    <div class="wrapper">
      <script type="text/javascript">var submitted=false;</script>
      <iframe id="submitIframe" name="submitIframe" onload="if(submitted) showOverlayMessage('Thank you for your message.', true);"></iframe>

      <form action="https://docs.google.com/forms/d/e/1FAIpQLSfs6_Yn581hrTLqLq0eUxUh126ZX-R1GUn_Rulsoa-5u45quQ/formResponse" target="submitIframe" method="POST" id="mG61Hd" onsubmit="submitted=true;">
        <div class="row">
          <div class="col half">
            <div class="custom-input">
              <label>Your Name <span class="required">*</span></label>              
              <input type="text" id="name" placeholder="Your Name*" autocomplete="off" tabindex="0" name="entry.2131365302" value="" required />
              <span class="error" data-for="name"></span>
            </div>
            <div class="custom-input">
              <label>Your Email <span class="required">*</span></label>              
              <input type="email" id="email" placeholder="Your Email*" autocomplete="off" tabindex="0" name="entry.2041855017" value="" required />
              <span class="error" data-for="email"></span>
            </div>
            <div class="custom-input">
              <label>Your Contact No.</label>
              <input type="tel" id="tel" placeholder="Your Contact No." autocomplete="off" tabindex="0" name="entry.588472699" value="" />
              <span class="error" data-for="tel"></span>
            </div>
          </div>
          <div class="col half">
            <div class="custom-input">
              <label>Your Message <span class="required">*</span></label>              
              <textarea tabindex="0" id="message" placeholder="Your Message*" required name="entry.878490552"></textarea>
              <span class="error" data-for="message"></span>
            </div>
            <div class="cta-area float-right">
              <input class="button" type="submit" name="submitButton" value="Send">
            </div>
          </div>
        </div>
      </form>

      <div class="overlay-message vertical-centered">
        <span class="vertical-content" id="overlayMessage"></span>
      </div>


    </div>
  </div>
</div>

<?php include('footer.php'); ?>

<?php include('page-bottom.php'); ?>