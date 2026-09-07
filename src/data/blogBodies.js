/**
 * Article bodies for the three public blog posts.
 */
export const blogBodiesBySlug = {
  'planning-over-the-road-lanes-from-california': [
    'California outbound freight has a reputation for being “just another truck.” It is not. Origin hours, driver HOS, mountain weather, and receiver appointment culture on the other end all sit on the same clock. If any one of them is guessed, the load looks late before the tractor leaves the yard.',
    'Start with the dock, not the map. A Central Valley shipper that loads until 3 p.m. cannot support a 6 p.m. driver arrival and still make a next-morning delivery two states away. Write the actual shipping hours into the tender. If the warehouse needs a two-hour window, say so. Carriers price honesty cheaper than surprise detention.',
    'Equipment is the second filter. Dry van is the default, but produce, chocolate, some chemicals, and a long list of retail programs need a reefer even when the product “feels fine.” Flatbed and step-deck requests should include dimensions and securement notes in the first email, not after three trucks have already passed.',
    'Transit should be described as a delivery appointment, not a number of days. “Three days” means different things to a team driver, a solo, and an LTL network. If the receiver will not unload on Saturday, a Friday ETA that lands at 7 p.m. is a Monday delivery. Plan labor on that basis.',
    'California also means geography. Grapevine weather, Bay Area congestion, and agricultural inspection stations are ordinary, not edge cases. Build a little slack into lanes that cross those points, especially in winter and during harvest peaks.',
    'Once a lane repeats, write it down: pickup window, equipment, average loaded miles, receiver quirks, and the backup plan if the first truck falls out. Kangaroo Logistics runs California origins as a desk, not as one-off load boards. The goal is a pickup the dock can execute and a delivery the receiver can staff.',
  ],
  'reefer-setpoint-checklist-for-produce-and-frozen-freight': [
    'A reefer trailer is not a magic box. It holds a range you give it, and only if the unit is pre-cooled, the doors stay shut, and the product went on the truck already in spec. Most claims we see started at loading, not at mile 400.',
    'Put the setpoint in the tender as a number or a band, not as “keep it cold.” Fresh berries, bagged salad, frozen protein, and floral do not share a range. If the shipper pulp-tests, say what pass/fail looks like. If the receiver rejects above a certain pulp temperature, that belongs on the load confirmation.',
    'Ask whether the unit should run continuous or cycle. Produce often wants continuous airflow. Frozen product may be fine on cycle. Dual-temp or multi-stop grocery runs need compartments that actually isolate, not a bulkhead that leaks warm air into the rear.',
    'Pre-cool is not optional in summer, especially out of California. A trailer sitting in a yard at 95°F will not pull a fresh load down in the first hour. The unit should be at range before the first pallet crosses the dock plate.',
    'In transit, someone has to own the alarm. Drivers should check the display at fuel stops. If your program supports a temperature report, request it at booking so it is not an argument after a rejection. When a unit struggles, the next call is a shop or a transload — not a hope that the product “will be fine.”',
    'Kangaroo’s reefer desk treats setpoint, commodity, and appointment as one file. If those three do not agree, we do not cover the load and hope. That is how product arrives in spec instead of in a claim folder.',
  ],
  'last-free-day-drayage-how-to-keep-containers-moving': [
    'Last free day is a calendar event with a dollar sign attached. Once it passes, storage at the terminal and detention on the equipment start stacking. The industry talks about this as if it were weather. Most of the time it is a planning miss.',
    'The file needs four facts early: container number, terminal or ramp, last free day, and whether the warehouse can receive that day. Missing any one of those turns a simple pull into a scramble for chassis, appointments, and overtime gates.',
    'Chassis availability is the silent killer on West Coast boxes. Quoting a dray without a chassis plan is quoting a hope. If the market is tight, say so at the quote stage and build extra time rather than promising a same-day miracle.',
    'The warehouse is the other half. A DC that only live-unloads from 7 a.m. to 2 p.m. cannot absorb a 4 p.m. out-gate. Drop yards and transload facilities exist for this reason. Use them when the math of last free day is worse than an extra handling charge.',
    'Empty returns deserve the same attention as the loaded move. A box that delivers and then sits because nobody booked the empty is still on the clock. Treat import, unload, and return as one cycle.',
    'Kangaroo coordinates West Coast port and ramp drayage with last free day on the face of the file. We would rather tell you a pull is not realistic on Tuesday than watch storage invoices appear on Friday.',
  ],
}

export function getBlogBody(slug) {
  return blogBodiesBySlug[slug] ?? []
}
