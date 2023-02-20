<button
  onClick={() => {
    setLoading(true);
    setMoreButton((moreButton += 1));
    if (moreButton === 1) {
      axios
        .get('https://codingapple1.github.io/shop/data2.json')
        .then((data) => {
          const arr = [...shoes, ...data.data];
          setShoes(arr);
          setLoading(false);
        })
        .catch(() => {
          console.log('실패함ㅅㄱ');
          setLoading(false);
        });
    } else if (moreButton === 2) {
      axios
        .get('https://codingapple1.github.io/shop/data3.json')
        .then((data) => {
          const arr = [...shoes, ...data.data];
          setShoes(arr);
          setLoading(false);
        })
        .catch(() => {
          console.log('실패함ㅅㄱ');
          setLoading(false);
        });
    } else {
      alert('더 이상 상품이 없어요~~');
      setLoading(false);
    }
  }}>
  더보기
</button>;
