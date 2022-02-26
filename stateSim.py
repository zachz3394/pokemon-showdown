import subprocess
import sys
import json


# Return json object of a new game state
def createGame():
    result = subprocess.check_output('./stateSim.js', encoding='UTF-8')
    return json.loads(result)

# Return json object of the next game state given the previous state and a set of player moves
def stepNext(prevState, p1Move, p2Move):
    result = subprocess.check_output(['./stateSim.js', prevState, p1Move, p2Move], encoding='UTF-8')
    return json.loads(result)

def main():
    if (len(sys.argv) < 3):
        print(json.dumps(createGame(), indent=2))
    else:
        args = sys.argv
        print(json.dumps(stepNext(args[1], args[2], args[3]), indent=2))

if __name__ == '__main__':
    main()
