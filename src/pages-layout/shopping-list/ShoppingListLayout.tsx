import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper';
import ShoppingListCart from '@/containers/ShoppingListCart';
import ShoppingListForm from '@/containers/ShoppingListForm';

import useShoppingList from '@/pages-layout/shopping-list/useShoppingList';

const ShoppingListLayout: React.FC = () => {
  const props = useShoppingList({ resetForm: true });

  return (
    <MainContentWrapper>
      <div className='grid gap-5 lg:grid-cols-2'>
        <div className='no-scrollbar grid h-[55rem] grid-rows-[auto_1fr] overflow-y-auto'>
          <AuthenticatedLayoutHeader
            headerText='Shopping List'
            subText='Add your orders here as much as you need them and once you are ready to pay we will get them for you'
          />
          <ShoppingListForm {...props} />
        </div>
        <div className='h-[55rem] overflow-hidden pt-5'>
          <ShoppingListCart {...props} />
        </div>
      </div>
    </MainContentWrapper>
  );
};

export default ShoppingListLayout;
