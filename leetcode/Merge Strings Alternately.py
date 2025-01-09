class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged = ""
        for index in range(max(len(word1),len(word2))):
            if index >= len(word1):
                merged = merged + word2[index:]
                break
                
            elif index >= len(word2):
                merged = merged + word1[index:]
                break
            else:
                merged = merged + word1[index] + word2[index]
        return merged