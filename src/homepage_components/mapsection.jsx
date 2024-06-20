import React from "react";

export default function MapSection() {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25580.296383523942!2d40.31466424594351!3d8.604909670532841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16350cea77632c49%3A0xbc68b250dd849ec1!2sMechara%20Town!5e0!3m2!1sen!2set!4v1718909396965!5m2!1sen!2set"
          //   width="600"
          height="450"
          className="w-full "
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
    </div>
  );
}
