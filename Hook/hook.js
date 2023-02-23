function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  return (
    <div>
      <div>{value1}</div>
      <div>{value2}</div>
    </div>
  );
}

function App() {
  useEffect(async () => {
    await Promise.resolve(1);
  }, []);
  return (
    <div>
      <div>Test</div>
    </div>
  );
}
