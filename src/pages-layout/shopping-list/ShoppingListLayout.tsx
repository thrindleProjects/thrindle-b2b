import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper';
import ShoppingListCart from '@/containers/ShoppingListCart';
import ShoppingListForm from '@/containers/ShoppingListForm';

import useShoppingList from '@/pages-layout/shopping-list/useShoppingList';

const ShoppingListLayout: React.FC = () => {
  const props = useShoppingList({ resetForm: true });

  return (
    <MainContentWrapper>
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <AuthenticatedLayoutHeader
            headerText='Shopping List'
            subText='Add your orders here as much as you need them and once you are ready to pay we will get them for you'
          />
          <ShoppingListForm {...props} />
        </div>
        <ShoppingListCart cart={props.cart} />
      </div>
    </MainContentWrapper>
  );
};

export default ShoppingListLayout;
