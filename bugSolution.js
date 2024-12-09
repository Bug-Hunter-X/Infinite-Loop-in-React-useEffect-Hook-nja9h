```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Updates only on initial render
    // Added condition to avoid unnecessary updates.
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <div>Count: {count}</div>;
}
```