export function VoiceIcon(props = {}) {
  return (
    <svg
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
      className="vi--icon vi--voice-icon"
      style={{color: props.color}}
    >
      <path d="M28.4623 8.15497C27.5273 7.77127 26.4523 7.98305 25.7373 8.69565L15.0048 20.4212H7.50479C6.12979 20.4212 5.00479 21.5449 5.00479 22.9128V37.8623C5.00479 39.2327 6.12979 40.354 7.50479 40.354H15.0048L25.7373 52.0844C26.4523 52.7971 27.5273 53.0113 28.4623 52.6251C29.3973 52.2389 30.0048 51.3295 30.0048 50.3204V10.4547C30.0048 9.45061 29.3973 8.53619 28.4623 8.15497ZM35.0048 12.9461V17.9293C41.8973 17.9293 47.5048 23.5205 47.5048 30.3875C47.5048 37.2569 41.8973 42.8456 35.0048 42.8456V47.8288C44.6548 47.8288 52.5048 40.0076 52.5048 30.3875C52.5048 20.7723 44.6548 12.9461 35.0048 12.9461ZM35.0048 22.9126C39.1398 22.9126 42.5048 26.2689 42.5048 30.3875C42.5048 34.5111 39.1398 37.8623 35.0048 37.8623V32.8791C36.3823 32.8791 37.5048 31.7604 37.5048 30.3875C37.5048 29.0146 36.3823 27.8959 35.0048 27.8959V22.9126Z" fill="currentColor"></path>
    </svg>
  );
}

export function MuteIcon(props = {}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="vi--icon vi--mute-icon"
      style={{ color: props.color }}
    >
      <path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor"></path>
      <path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor"></path>
      <path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path>
      <path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" fill="currentColor"></path>
    </svg>
  );
}

export function DeafIcon(props = {}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="vi--icon vi--deaf-icon"
      style={{ color: props.color }}
    >
      <path d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z" fill="currentColor"></path>
      <path d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z" fill="currentColor"></path>
      <path d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z" fill="currentColor"></path>
    </svg>
  );
}