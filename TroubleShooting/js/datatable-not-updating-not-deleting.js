// Problem: Table not refreshing
// Solution: Use reload with proper parameters

// ❌ WRONG
resultsTable.ajax.reload();

// ✅ CORRECT - maintains current page
resultsTable.ajax.reload(null, false);
