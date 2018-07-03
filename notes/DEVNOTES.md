## DEVELOPMENT NOTES

### VERSION 1 

#### Single Board with following User Stories 

UI Elements 

1. Add List 
2. Add Card in List
3. Edit and Delete Cards

Data Structure 
```
Board: 
  { 
    "list-1": {
      id: SEQUENTIAL NUMBER 
      "card-1":{
        id: SEQUENTIAL NUMBER,
        title: 'STRING NAME',
        date: 'CREATED_AT' 
      }
    }
  }
  ```

Events 
1. ADD_LIST -> Opens form (UI event)
2. SAVE_LIST- Saves and displays (state change)
3. ADD_CARD -> Opens Form (UI Event)
3. SAVE_CARD - Save and display card in a list (state change)
4. EDIT_CARD - opens form with details filled - (UI Event)
5. UPDATE_CARD - Save changes to card  and display list (state change)
6. DELETE_CARD - Deletes and displays new list (state change)