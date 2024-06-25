# The Event Loop Phases

1. **Timers**:

   - **Function**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
   - **Details**: When the event loop enters the timers phase, it checks for any timers whose time has expired and executes their corresponding callbacks.

2. **Pending Callbacks**:

   - **Function**: Executes I/O callbacks deferred to the next loop iteration.
   - **Details**: This phase handles callbacks for some system operations such as TCP errors.

3. **Poll**:

   - **Function**: Retrieves new I/O events and executes their callbacks.
   - **Details**: The poll phase is responsible for executing I/O callbacks as soon as possible, polling for I/O events, and determining if the event loop should continue.

4. **Check**:

   - **Function**: Executes callbacks scheduled by `setImmediate()`.
   - **Details**: This phase allows you to execute callbacks immediately after the poll phase has completed.

5. **Close Callbacks**:
   - **Function**: Executes callbacks for closed events.
   - **Details**: This phase executes all callbacks related to 'close' events, like when a socket or handle is closed.

## Special Exit Condition

- **Process Exit**:
  - **Condition**: If there are no more references (`refs == 0`), the event loop will exit.
  - **Details**: The event loop will exit when there are no more tasks to perform, no more timers to process, or no more I/O operations pending.

## Flow of the Event Loop

- The event loop moves through the phases in a specific order: Timers -> Pending Callbacks -> Poll -> Check -> Close Callbacks.
- After completing the cycle, it either starts again if there are still tasks or exits if there are none (`refs == 0`).
