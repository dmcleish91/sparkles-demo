type SparkleInstanceProps = {
  color: string;
  size: number;
  style: React.CSSProperties;
};
export default function SparkleInstance({ color, size, style }: SparkleInstanceProps) {
  return (
    <div className='grow-animation' style={style}>
      <svg width={size} height={size} viewBox='0 0 160 160' fill='none' className='spin-animation'>
        <path
          d='M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 
        160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z'
          fill={color}
        />
      </svg>
    </div>
  );
}
