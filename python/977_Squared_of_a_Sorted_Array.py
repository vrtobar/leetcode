class Solution:
  def sortedSquares(self, A: List[int]) -> List[int]:
    if not A: return []
    
    result: List[int] = []
    negIdx: int = 0
    posIdx: int = len(A)-1

    while negIdx <= posIdx:
      if abs(A[negIdx]) > abs(A[posIdx]):
        result.append(A[negIdx]**2)
        negIdx += 1
      else:
        result.append(A[posIdx]**2)
        posIdx -= 1
      
    return reversed(result)
