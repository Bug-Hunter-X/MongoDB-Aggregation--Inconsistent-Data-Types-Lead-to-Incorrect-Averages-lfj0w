```javascript
// Solution: Using $type operator to filter out non-numeric age values
db.users.aggregate([
  {
    $match: { age: { $gte: 18, $type: "number" } }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" }
    }
  }
]);

//Alternative solution: convert to a number using $toInt or $toDouble before $group
db.users.aggregate([
  {
    $match: { age: { $gte: 18 } }
  },
  {
    $addFields: {
      numericAge: {$toInt: "$age"}
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$numericAge" }
    }
  }
]);
```