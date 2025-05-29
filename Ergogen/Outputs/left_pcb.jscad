function left_pcb_extrude_1_outline_fn(){
    return new CSG.Path2D([[20.9,-134],[79.1,-134]]).appendArc([87,-141.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([87,-142.1]).appendArc([94.9,-150],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([114.0129741,-150]).appendArc([119.2397847,-151.9762806],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([131.7602153,-163.0237194]).appendArc([136.9870259,-165],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([149.1,-165]).appendArc([157,-157.1],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([157,-20.9]).appendArc([149.1,-13],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([57.9,-13]).appendArc([50,-20.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([50,-22.1]).appendArc([42.1,-30],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([20.9,-30]).appendArc([13,-37.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([13,-126.1]).appendArc([20.9,-134],{"radius":7.9,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[143.5,-107.2845],"radius":2.2})
.union(
    CAG.circle({"center":[100.633541,-144.4216049],"radius":2.2})
).union(
    CAG.circle({"center":[65,-125.427],"radius":2.2})
).union(
    CAG.circle({"center":[143.5,-62.6845],"radius":2.2})
).union(
    CAG.circle({"center":[122,-19.0845],"radius":2.2})
).union(
    CAG.circle({"center":[51,-30.8],"radius":2.2})
)).extrude({ offset: [0, 0, 1] });
}




                function left_pcb_case_fn() {
                    

                // creating part 0 of case left_pcb
                let left_pcb__part_0 = left_pcb_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_pcb__part_0_bounds = left_pcb__part_0.getBounds();
                let left_pcb__part_0_x = left_pcb__part_0_bounds[0].x + (left_pcb__part_0_bounds[1].x - left_pcb__part_0_bounds[0].x) / 2
                let left_pcb__part_0_y = left_pcb__part_0_bounds[0].y + (left_pcb__part_0_bounds[1].y - left_pcb__part_0_bounds[0].y) / 2
                left_pcb__part_0 = translate([-left_pcb__part_0_x, -left_pcb__part_0_y, 0], left_pcb__part_0);
                left_pcb__part_0 = rotate([0,0,0], left_pcb__part_0);
                left_pcb__part_0 = translate([left_pcb__part_0_x, left_pcb__part_0_y, 0], left_pcb__part_0);

                left_pcb__part_0 = translate([0,0,0], left_pcb__part_0);
                let result = left_pcb__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_pcb_case_fn();
            }

        