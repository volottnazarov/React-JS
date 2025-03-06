// HOC для добавления стилей компоненту, в данном примере иконки загрузки на 3 секунды

export const loadingIndicator = (Component, isLoading) => {
    return(props) => {
        const newProps = {
            ...props,
            isLoading
        };
        return <Component {...newProps} />
    };
}