import List from "./list";

function LiElements() {
    const elements = [1, 2, 3, 4, 5, 6, 7];
    const renderItem = (item, index) => {
        const style = { color: index % 2 === 0 ? "red" : "green"}
        return(
            <div style={style}>
                {item} уникальный стиль
            </div>
        )
    }
    return (
        <div>
            <List listItems={elements} renderItem={renderItem} />
        </div>
    )
}

export default LiElements;