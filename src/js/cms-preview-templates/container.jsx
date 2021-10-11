function Container() {
  const {
    Frame,
    useFrameEffect,
    configureFrame,
    sync
  } = useEasybase();

  useEffect(() => {
    configureFrame({ limit: 10, offset: 0 });
    sync();
  }, []);

  useFrameEffect(() => {
    console.log("Frame data changed!");
  });

  const onChange = (index, column, newValue) => {
      Frame(index)[column] = newValue;
      sync();
  }

  return (
    <div>
      {Frame().map(ele => <Card frameEle={ele} onChange={onChange} index={index}  />)}
    </div>
  )

}
