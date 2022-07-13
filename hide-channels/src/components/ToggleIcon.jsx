export function ToggleIcon(props = {}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      className="hc--icon hc--toggle-icon"
      style={{ color: props.color }}
    >
      <path d="M8 7a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10H8zm0-2h8a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor" />
    </svg>
  );
}