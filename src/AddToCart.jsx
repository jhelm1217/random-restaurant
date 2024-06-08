const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div>
            {/* Other components */}
            <Menu items={items} onAddToCart={addToCart} />
            {/* Other components */}
        </div>
    );
};
