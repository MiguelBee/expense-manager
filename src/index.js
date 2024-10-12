import React from 'react';
import ReactDOM from 'react-dom/client';
import Pager from './components/Pager';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const items = [
 { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food"
},
 { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category:
"Food" },
 { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category:
"Entertainment" },
 { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15",
category: "Academic" },
 { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category:
"Food" },
 { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category:
"Cloth" },
 { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category:
"Entertainment" },
 { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category:
"Food" },
 { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category:
"Gadgets" },
 { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category:
"Academic" }
]

const pageCount = 3;

root.render(
  <React.StrictMode>
    <Pager
      items={items}
      pageCount={pageCount}
      render={
        pagerState => (
          <div>
            <ExpenseEntryItemList items={pagerState.items}
              onDelete={pagerState.deleteHandler} />
          </div>
        )
      }
    />
  </React.StrictMode>
);

/**
 Another way to do it, but ".createRoot" is more modern
 ReactDOM.render(
 <React.StrictMode>
 <HelloWorld />
 </React.StrictMode>,
 document.getElementById('root')
);**/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
