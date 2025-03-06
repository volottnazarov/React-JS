import Loading from "./loading";
import { useState } from "react";
import { loadingIndicator } from "./loadingIndicator";


function WithLoadingIndicator() {
    const [isLoading, setIsLoading] = useState(true); // состояние isLoading
    const NewLoading = loadingIndicator(Loading, isLoading); //HOC для добавления компоненту
    // Loading значения isLoading для смены иконки загрузки на "конец загрузки"

    setTimeout(() => {
        setIsLoading((prev) => prev ? !prev : prev);  // смена состояния true на false с задержкой в 3 сек.
    }, 3000);

    return (
        <NewLoading />
    );
}

export default WithLoadingIndicator;