class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        max_value = max(candies)
        result = []
        for index in range(len(candies)):
            result.append(True) if (candies[index] + extraCandies) >= max_value else result.append(False)
        return result