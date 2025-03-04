import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.35355422392058!2d76.749571087389!3d30.72804541088627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedefeca05da7%3A0x488ef40b89968276!2sApurva%20Arts!5e0!3m2!1sen!2sin!4v1740552278504!5m2!1sen!2sin"
      width="100%"
      height="250"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default GoogleMap;
