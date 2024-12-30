type Props = {
  size?: string;
};

function Loader({ size = "w-12 h-12" }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`${size} border-4 border-blue-500 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
}

export default Loader;