"""
DISCLAIMER

The work contained within this file, and any related directories or materials contributing to similar objectives, is not intended to represent itself as the complete original work of Nadol Lueprapai.

Nadol Lueprapai does not claim exclusive or full ownership over all content contained within this file where such content is derived from, inspired by, adapted from, or modified from pre-existing works, concepts, or third-party sources.

This work may include, but is not limited to:
1. Adaptations of existing ideas or concepts;
2. Modifications of pre-existing source material;
3. Original contributions created in combination with referenced or derivative material.

This file and its contents are provided without intent to:
- Misrepresent authorship, ownership, or expertise;
- Cause misunderstanding regarding the origin of the work;
- Fabricate credentials or qualifications;
- Commit fraud or deceptive practices of any kind;

All credited material, where applicable, remains the property of its respective owners.

Nadol Lueprapai did not devise the solution to this puzzle, he can only grasp a fraction of the logic needed for the solution. 

Artificial intelligence may have been utilized.
"""

def hanoi_solver(n):
    #moves list for string returning
    moves = []

    #rods
    left = list(range(n,0,-1))
    mid = []
    right = []

    #append to the list, the starting position of rings
    moves.append(f'{left} {mid} {right}')

    def move(num, source, target, aux):
        if num == 1:
            target.append(source.pop())
            moves.append(f'{left} {mid} {right}')
            return
        
        move(num - 1, source, aux, target)

        target.append(source.pop())
        moves.append(f'{left} {mid} {right}')

        move(num - 1, aux, target, source)

    #start recursion
    move(n, left, right, mid)

    #return the joined up list
    return '\n'.join(moves)

if __name__ == '__main__':
    print(hanoi_solver(5))