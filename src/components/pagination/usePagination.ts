import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux/store"
import { setPage } from "../../redux/transactions/transactionsSlice"


export const usePagination = () => {
    const {page, totalPages} = useSelector((state: AppState) => state.transactions )

    const dispatch = useDispatch()

    const changePage = (index: number) => {
        dispatch(setPage(index))
    }

    return {changePage}
}