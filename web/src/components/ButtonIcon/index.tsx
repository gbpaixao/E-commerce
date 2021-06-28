interface IButtonIconProps {
  char: React.ReactNode,
  onClick?: () => void
}
export default function ButtonIcon({ char, onClick }: IButtonIconProps):JSX.Element {
  return (
    <button
      type="button"
      style={{
        border: '1px solid #5227CC',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        color: '#5227CC',
        cursor: 'pointer',
        marginRight: '10px',
        width: '30px',
        height: '30px',
      }}
      onClick={onClick}
    >
      {char}
    </button>
  );
}
