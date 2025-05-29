function right_xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[311.1,-139],[252.9,-139]]).appendArc([245,-146.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([245,-147.1]).appendArc([237.1,-155],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([217.9870259,-155]).appendArc([212.7602153,-156.9762806],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([200.2397847,-168.0237194]).appendArc([195.0129741,-170],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([172.9,-170]).appendArc([165,-162.1],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([165,-15.9]).appendArc([172.9,-8],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([274.1,-8]).appendArc([282,-15.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([282,-17.1]).appendArc([289.9,-25],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([311.1,-25]).appendArc([319,-32.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([319,-131.1]).appendArc([311.1,-139],{"radius":7.9,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function right_bottom_case_fn() {
                    

                // creating part 0 of case right_bottom
                let right_bottom__part_0 = right_xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_bottom__part_0_bounds = right_bottom__part_0.getBounds();
                let right_bottom__part_0_x = right_bottom__part_0_bounds[0].x + (right_bottom__part_0_bounds[1].x - right_bottom__part_0_bounds[0].x) / 2
                let right_bottom__part_0_y = right_bottom__part_0_bounds[0].y + (right_bottom__part_0_bounds[1].y - right_bottom__part_0_bounds[0].y) / 2
                right_bottom__part_0 = translate([-right_bottom__part_0_x, -right_bottom__part_0_y, 0], right_bottom__part_0);
                right_bottom__part_0 = rotate([0,0,0], right_bottom__part_0);
                right_bottom__part_0 = translate([right_bottom__part_0_x, right_bottom__part_0_y, 0], right_bottom__part_0);

                right_bottom__part_0 = translate([0,0,0], right_bottom__part_0);
                let result = right_bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_bottom_case_fn();
            }

        