/**
 * Article bodies for the public blog catalog plus the three homepage
 * posts, which stay available so home-page cards still open.
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
  'when-to-store-and-when-to-transload': [
    'Not every inbound container or overage pallet needs a warehouse lease. Some freight needs a floor for three weeks. Some needs two hours and a different trailer. Mixing those up is how inventory gets lost and how detention grows.',
    'Store when you do not yet know the outbound plan, when SKUs must be broken out, or when the next truck is days away. Good overflow storage gives you a location, a count, and a receiving appointment — not a trailer parked behind a building.',
    'Transload when the ocean box or inbound trailer is the problem, not the inventory. If you need domestic pallets heading to three DCs, stripping the container the day it arrives is often cheaper than storing the box and paying equipment charges.',
    'Ask two questions: How long will this freight sit, and how many times does it need to be touched? Long dwell plus many SKUs points to storage. Short dwell plus a simple reload points to transload or cross-dock.',
    'Climate and security still matter in both cases. Produce, chocolate, and some chemicals do not belong in a warm dry warehouse “just overnight.” High-value freight should not sit in an unattended lot.',
    'Kangaroo quotes warehouse and transload as freight tools, not as a separate software product. The same desk that books the dray can line up the dock so the freight has a next move.',
  ],
  'ftl-vs-ltl-a-practical-decision-for-growing-shippers': [
    'FTL versus LTL is often sold as a pallet-count rule: more than 8–10 pallets, take a truck. That heuristic is useful and also incomplete. Handling, claims risk, and the receiver’s appointment type should get a vote.',
    'LTL wins when the freight is a few pallets, the commodity is sturdy, and a longer transit with extra touches is acceptable. You pay for space, not for the whole trailer. You also accept terminals, rehandling, and a network schedule you do not control.',
    'FTL wins when the freight is dense, fragile, high-value, or on a clock. One driver, one trailer, fewer doors. The rate looks higher until you count the cost of a damaged shipment or a missed production window.',
    'Growing shippers get stuck in the middle: too much freight for comfortable LTL, not quite enough to feel good about a full truck. That is the moment to price both and look at cubic capacity, not just pallet count. Light, bulky freight can fill a trailer long before it hits a weight limit.',
    'Accessorials change the math. Liftgates, inside delivery, residential, and limited access can make LTL painful. Detention at a slow receiver can make FTL painful. Put those on the quote request so the comparison is honest.',
    'Kangaroo quotes both. If six pallets should ride LTL, we will say so. If those six pallets are glass and due tomorrow, we will push FTL. The mode should follow the freight, not a habit.',
  ],
  'ocean-freight-only-works-with-an-inland-plan': [
    'Shippers sometimes buy ocean like an airline ticket: pick a sailing, celebrate the booking, and think about trucks later. Containers do not work that way. Arrival day is when a new set of clocks start — last free day, chassis, warehouse appointments, and sometimes rail cutoff.',
    'FCL is the cleaner product when you can fill a box or need the freight isolated. LCL is fine for smaller lots if you accept extra handling and a less predictable dwell after arrival. Neither one is “delivered” when the vessel docks.',
    'Documents belong in the same conversation as space. Incomplete commercial paperwork, a late ISF, or a broker who does not have the file will hold a container more firmly than fog in the harbor. Start the paper trail when you start the booking.',
    'Inland should be named in the quote: dray to a local warehouse, ramp to rail, or OTR to an inland DC. If that piece is “we will figure it out,” you are buying storage risk. West Coast gateways in particular punish late inland planning.',
    'Transload is a legitimate inland plan. Stripping a box and reloading to domestic equipment can beat storing the ocean container through a slow week. It is not free, but neither is detention.',
    'Kangaroo books ocean with the inland move attached. The water is one leg. Delivery is the job.',
  ],
  'when-intermodal-beats-a-straight-truck': [
    'Intermodal — usually rail plus a truck on each end — is not a personality type. It is a math problem. Long inland miles, flexible delivery windows, and stable volume often favor rail. Short clocks, tight appointments, and fragile freight often do not.',
    'The savings show up on the long middle. They disappear if the ramp dwell eats two days, the box misses cutoff, or the final-mile truck cannot make the receiver’s 7 a.m. slot. Always price rail all-in: dray or origin truck, rail, destination truck, and likely dwell.',
    'Appointments are the tell. If the DC will refuse a load that is two hours late, a train schedule is a weak foundation. If the DC can take freight across a two-day window, rail becomes interesting.',
    'Product type matters. Heavy, durable commodities tolerate extra handling. Temperature-controlled intermodal exists, but it needs a tighter equipment and monitoring plan than a dry box on a well.',
    'California to inland destinations is a common place this decision appears. Some lanes should stay OTR because the clock is real. Some should go rail because the freight is patient and the mileage is not.',
    'Kangaroo will recommend the mode we would actually run, including the backup if a train slips. Mixed-mode plans only work when one desk owns the handoff.',
  ],
  'what-to-send-in-a-freight-quote-request': [
    'A quote request with origin city, destination city, and “need a truck” will get you a range, not a rate you can book against. Brokers and carriers fill gaps with assumptions. Assumptions are where detention, reweighs, and missed pickups live.',
    'Minimum useful tender: shipper hours, receiver hours, commodity, weight, pallet or piece count, dimensions if bulky, equipment type, pickup date, and whether the job is live or drop. Add last free day for containers. Add setpoint for reefers.',
    'Accessorials are not nickel-and-dime trivia. Liftgate, inside delivery, residential, limited access, hazmat, and oversized all change who can take the freight. If you know them, list them. If you are not sure, say you are not sure so we can ask the dock.',
    'Timing language should be specific. “ASAP” is not a window. “Load Tuesday 0800–1400, deliver Thursday by 10:00 appointment #1288” is a window. The second one can be covered. The first one will be negotiated all afternoon.',
    'Photos help on odd freight. A skid of machinery, a crate with an overhang, or a load that needs straps and tarps should not be described only as “1 pallet.”',
    'Send that package to Kangaroo and we can usually return a usable quote the same business day. The missing fields are the delay, not our willingness to work the load.',
  ],
  'drop-trailer-vs-live-unload-what-your-dock-can-support': [
    'Drop-and-hook is popular because it looks like free time for everyone. The driver leaves a trailer, grabs an empty, and is gone. Live unload keeps the driver on site until the freight is off. Both are valid. Both fail when the yard or the labor cannot support them.',
    'Drop programs need space. If your lot holds four trailers and you already have six sitting, you do not have a drop program. You have a parking shortage that will generate driver refusal and detention arguments.',
    'Live unload needs labor and a real appointment. If the warehouse cannot start within the free time, you will pay for the wait. That is not the carrier being difficult. That is the contract working as written.',
    'Receivers sometimes want drop because they do not want to staff a live window. Shippers sometimes want live because they do not want trailers lingering. Write the constraint into the tender so the carrier is not guessing at the gate.',
    'Hybrid setups exist: drop at a nearby yard, live at the plant, or transload when neither dock can take the equipment. Those are operational choices, not moral ones.',
    'Kangaroo asks about live versus drop on every OTR and drayage file that needs it. Matching the appointment type to the facility is one of the cheapest ways to keep a lane healthy.',
  ],

  'port-of-los-angeles-hits-record-container-volume': [
    'The Port of Los Angeles, already the busiest port in the United States, announced that it handled over 1 million twenty-foot equivalent units in July—a record-setting milestone in its operations. This marks an 8.5% increase compared to the same month last year, with total volumes climbing more than 14% from June.',
    'According to Executive Director Gene Seroka, the dramatic rise in container movement was driven by shippers front-loading cargo to ensure goods reached U.S. retailers before new import tariffs could take effect. Loaded imports alone rose nearly 544,000 TEUs, mirroring the overall growth rate.',
    'The surge highlights how ongoing tariff uncertainty continues to disrupt trade flows. Many businesses are accelerating shipments to take advantage of any time-lag before new duties are implemented. “It’s been a roller-coaster ride all year long, and the ride’s not over yet,” Seroka noted.',
    'Industry data further supports the trend, showing that nearly 75 dry-cargo ships departed China’s east coast for U.S. West Coast ports on a 15-day rolling average between late June and mid-July—marking year-to-date highs. With shipments from China typically taking three to four weeks to reach the U.S., traders remain focused on navigating shifting timelines and policy changes.',
    'While a temporary 90-day trade truce between the U.S. and China has extended tariff deadlines until early November, uncertainty remains high, leaving ports, carriers, and shippers bracing for further fluctuations in global trade.',
  ],
  '5-key-benefits-of-full-truckload-shipping-for-high-volume-freight': [
    'In today’s fast-paced logistics industry, businesses that move high-volume freight need efficient, reliable, and cost-effective shipping solutions. Full truckload (FTL) shipping is a preferred choice for companies looking to transport large shipments without delays, damages, or excessive handling.',
    'Unlike Less-Than-Truckload (LTL) shipping, which combines multiple shipments in a single truck, FTL dedicates an entire truck to one shipper’s cargo. This provides faster transit times, better security, and optimized costs for bulk freight.',
    'If your business regularly ships large quantities of goods, understanding the advantages of full truckload services can help you optimize your supply chain. Below, we explore the five key benefits of FTL shipping and how it can improve efficiency for high-volume freight shippers.',
    'One of the biggest advantages of FTL shipping is speed. Since the entire truck is dedicated to a single shipment, there are no frequent stops, consolidations, or reloading processes that delay deliveries.',
    'For companies operating on strict timelines, FTL shipping ensures products reach their destination on schedule, reducing downtime and improving customer satisfaction.',
    'Shipping fragile, high-value, or sensitive goods? FTL provides a safer transportation method compared to LTL.',
    'For industries like pharmaceuticals, electronics, or automotive, where product integrity is critical, FTL shipping is the preferred option to prevent costly damage.',
    'While FTL shipping might seem more expensive upfront, it offers better long-term value for businesses shipping large volumes.',
    'If you consistently move high-volume shipments, FTL becomes a more economical option in the long run compared to LTL freight.',
    'FTL shipping offers businesses more control over their shipments, ensuring that cargo is transported efficiently and securely.',
    'For industries that require strict supply chain security, such as medical supplies or confidential shipments, FTL ensures a higher level of protection and compliance.',
    'In today’s competitive business landscape, efficient supply chain management is essential for reducing costs and meeting customer expectations. FTL shipping plays a crucial role in optimizing logistics.',
    'By integrating FTL shipping into their supply chain strategy, businesses can improve operational efficiency, reduce lead times, and enhance customer satisfaction.',
    'For companies shipping high-volume freight, choosing the right transportation method is key to cost savings, speed, and security. Full truckload services offer numerous benefits, including faster transit times, reduced risk of damage, better cost efficiency, greater control, and improved supply chain performance.',
  ],
  'strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics': [
    'The logistics industry is entering a new era in 2026. As global trade continues to evolve, businesses are facing increasing pressure to deliver goods faster, reduce transportation costs, improve visibility, and build resilient supply chains. Truckload (TL) and Less-Than-Truckload (LTL) shipping remain the backbone of freight transportation, but the way they operate is changing rapidly.',
    'Driven by advancements in artificial intelligence (AI), automation, sustainability initiatives, digital freight platforms, and customer expectations, the trucking industry is becoming smarter, faster, and more connected than ever before.',
    'This article explores the key Truckload and LTL freight trends expected to reshape global logistics in 2026 and beyond.',
    'Before exploring the trends, it is important to understand the difference between Truckload (TL) and Less-Than-Truckload (LTL) shipping.',
    'Truckload shipping is used when a shipment occupies most or all of a trailer. The truck moves directly from the pickup location to the destination with minimal stops, making it ideal for large shipments and time-sensitive freight.',
    'LTL shipping combines freight from multiple businesses into one truck. Each shipper pays only for the trailer space they use, making it an economical solution for smaller shipments.',
    'Global supply chains are becoming increasingly complex. Businesses are no longer focused solely on transportation—they now prioritize speed, flexibility, sustainability, and data-driven decision-making.',
    'These forces are reshaping both TL and LTL operations worldwide.',
  ],
}

export function getBlogBody(slug) {
  return blogBodiesBySlug[slug] ?? []
}
