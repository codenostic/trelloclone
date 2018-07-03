# DEVELOPMENT NOTES

## VERSION 1 

#### Single Board with following User Stories 

UI Elements 

1. Add List 
2. Add Card in List
3. Edit and Delete Cards

Data Structure 
```
Board->  
  { 
    "list-1": {
      id: SEQUENTIAL NUMBER 
      "card-1":{
        id: Sequential NUMBER,
        title: 'STRING NAME',
        date: 'CREATED_AT' 
      }
    }
  }
  ```

Events 
1. Add List -> Opens form (UI event)
2. Create New List - Saves and displays (state change)
3. Add New Card -> Opens Form (UI Event)
3. Create new Card - Save and display card in a list (state change)
4. edit click - opens form with details filled - (UI Event)
5. Update Card - Save changes to card  and display list (state change)
6. Delete Card - Deletes and displays new list (state change)