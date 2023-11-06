import { IconProps } from "@/types/props";

const ChipIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
      <path d="M45.4963 24.2464L26.7325 5.48262C25.9463 4.69637 24.8625 4.25012 23.7363 4.25012H8.5C6.1625 4.25012 4.25 6.16262 4.25 8.50012V23.7364C4.25 24.8626 4.69625 25.9464 5.50375 26.7326L24.2675 45.4964C25.925 47.1539 28.6238 47.1539 30.2813 45.4964L45.5175 30.2601C47.175 28.6026 47.175 25.9251 45.4963 24.2464ZM27.2638 42.5001L8.5 23.7364V8.50012H23.7363L42.5 27.2639L27.2638 42.5001Z" fill={props.color ? props.color : 'black'} />
      <path d="M13.8125 17C15.5729 17 17 15.5729 17 13.8125C17 12.0521 15.5729 10.625 13.8125 10.625C12.0521 10.625 10.625 12.0521 10.625 13.8125C10.625 15.5729 12.0521 17 13.8125 17Z" fill={props.color ? props.color : 'black'} />
    </svg>
  );
}

export default ChipIcon;