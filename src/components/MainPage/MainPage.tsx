import React, { useEffect } from "react";
import { ContainerWithCards } from "components/ContainerWithCards";
import { Row } from "antd";
import { Loader } from "../Loader";
import { ErrorToast } from "components/ErrorToast";
import { useSelector, useDispatch } from "react-redux";
import {
  actions,
  popularCategoriesSelectors,
} from "store/popularCategoriesSlice";
import { AppDispatch } from "store/store";

export const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const popularCategories = useSelector(
    popularCategoriesSelectors.getPopularCategories
  );

  const loading = useSelector(popularCategoriesSelectors.getIsLoadingSelector);
  const loaded = useSelector(popularCategoriesSelectors.getIsLoadedSelector);
  const error = useSelector(popularCategoriesSelectors.getIsErrorSelector);

  useEffect(() => {
    dispatch(actions.fetchPopularCategories());
  }, []);

  return (
    <Row>
      {loading && <Loader />}
      {error && <ErrorToast />}
      {loaded &&
        popularCategories.map(({ category, items }) => (

          <div key={category.id}>
            <ContainerWithCards category={category} items={items.slice(10)} />
          </div>
        ))}
    </Row>
  );
};
